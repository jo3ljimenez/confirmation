import { ChangeEvent, useState } from "react";
import axios from 'axios';
import '../button/button.css';
import '../textBox/textBox.css';
import '../comboBox/comboBox.css';
import "./confirmationForm.css";
import { Button, Dialog, DialogDismiss, DialogHeading } from "@ariakit/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const confirmationForm = () => {
    
    const formContainerStyle = { width: '100%' }
    const options = ['Si', 'No'];
    const [open, setOpen] = useState(false);
    const [fullName, setfullName] = useState('');
    const [answer, setAnswer] = useState<string>('');

    const credentials = {
        token: import.meta.env.VITE_GITHUB_TOKEN as string,
        repositoryOwner: import.meta.env.VITE_REPOSITORY_OWNER as string,
        repositoryName: import.meta.env.VITE_REPOSITORY_NAME as string,
        filePath: import.meta.env.VITE_REPOSITORY_FILE_PATH as string,
    };

    const handleFullName = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value.replace(/[^a-z\s]/gi, '');
        setfullName(value);
    };

    const handleSelectValue = (value: string) => {
        setAnswer(value);
      };
    

    const handleOpen = () => {        
        if(answer.length == 0 || fullName.length == 0){
            toast.warning("No se pudo enviar tu respuesta, asegúrate de que los campos Nombre Completo y Respuesta no se encuentren vacíos.", {
                position: "top-center",
                theme: "colored"
            })
            setOpen(false);
        }else{
            notify();
            setfullName('');
            setAnswer('');
            setOpen(false);
        }
    };

    const addListConfirmation = async ( ): Promise<void> => {
        let decode = credentials.token.replace(/\?/g,'');
            try {
            const response = await axios.get(
                `https://api.github.com/repos/${credentials.repositoryOwner}/${credentials.repositoryName}/contents/${credentials.filePath}`,
                {
                    headers: {
                        Authorization: `token ${decode}`,
                    },
                }
            );
      
        const currentContent = atob(response.data.content);    
        // Agregar el nuevo nombre y confirmación
        const updatedContent = `${currentContent}\n${fullName}\t${answer}`;
        // Actualizar el archivo en GitHub
        await axios.put(
            `https://api.github.com/repos/${credentials.repositoryOwner}/${credentials.repositoryName}/contents/${credentials.filePath}`,{
                message: `Se agrega el nombre ${fullName}`,
                content: btoa(updatedContent),
                sha: response.data.sha,
            },
            {
                headers: {
                Authorization: `token ${decode}`,
                },
            }
        );
    
        console.log('Archivo actualizado con éxito');
        } catch (error) {
            console.error('Error al agregar nombre y confirmación:', error);
        }
    };
    const notify = () => toast.promise(
        addListConfirmation, 
        {
            pending: 'Enviando respuesta...',
            success: `Tu respuesta envió con éxito ${fullName.trim().split(/\s+/)[0]}. Gracias por confirmar.`,
            error: `No se pudo enviar tu respuesta, Favor de reportar el problema a los novios.`,
        },
        {theme: "colored"}
    );
  
    return (
    <>
        <div className='confirmationFormContainer' style={formContainerStyle}>
            <div className="textBoxContainer">
                <input  type="text" 
                        placeholder='Nombre Completo'
                        value={fullName}
                        onChange={handleFullName}/>
            </div>

            <div className="comboBoxContainer">
                <select
                    onChange={(e) => handleSelectValue(e.target.value)}
                    value={answer}>
                    <option value="">Respuesta</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                        {option}
                        </option>
                    ))}
                    
                </select>
            </div>
            
            <div className="buttonContainer" onClick={() => setOpen(true)}>
                <button className="buttonComponent">
                    Enviar Respuesta
                </button>
            </div>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                getPersistentElements={() => document.querySelectorAll(".Toastify")}
                backdrop={<div className="backdrop" />}
                className="dialog"
            >
                <DialogHeading className="heading">Validar datos</DialogHeading>
                <p className="description">
                Se enviará la respuesta con el nombre: <b>{fullName}</b> ¿Desea enviar respuesta?
                </p>
                <div className="buttons">
                    <Button className="button" onClick={() => handleOpen()}>
                        Enviar
                    </Button>
                    <DialogDismiss className="button">Cancelar</DialogDismiss>
                </div>
            </Dialog>

            <ToastContainer className="toast-container" />
        </div>
    </>
  );
}

export default confirmationForm