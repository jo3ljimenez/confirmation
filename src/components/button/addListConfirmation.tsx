import axios from 'axios';

export const addListConfirmation = async (
  name: string,
  confirmation: string,
  credentials: {
    token: string,
    repositoryOwner: string,
    repositoryName: string,
    filePath: string,
  } 
): Promise<void> => {
  let error = false;
  let message = '';

  try {
    console.log(credentials);    // Obtener el contenido actual
    const response = await axios.get(
      `https://api.github.com/repos/${credentials.repositoryOwner}/${credentials.repositoryName}/contents/${credentials.filePath}`,
      {
        headers: {
          Authorization: `token ${credentials.token}`,
        },
      }
    );

    const currentContent = atob(response.data.content);

    // Agregar el nuevo nombre y confirmación
    const updatedContent = `${currentContent}\n${name}\t${confirmation}`;

    // Actualizar el archivo en GitHub
    await axios.put(
      `https://api.github.com/repos/${credentials.repositoryOwner}/${credentials.repositoryName}/contents/${credentials.filePath}`,
      {
        message: 'Actualizar archivo desde React',
        content: btoa(updatedContent),
        sha: response.data.sha,
      },
      {
        headers: {
          Authorization: `token ${credentials.token}`,
        },
      }
    );

    console.log('Archivo actualizado con éxito');
  } catch (error) {
    error = true;
    console.error('Error al agregar nombre y confirmación:', error);
  }

  if(!error){
      if(confirmation === 'SI'){
          message = `Gracias por confirmar tu asistencia ${name.trim().split(/\s+/)[0]}, nos da gusto que nos acompañes en este día tan especial para nosotros :D`;
      }else{
          message = `Lamentamos que no puedas acompañarnos, esperamos que nos veamos pronto :D`;
      }
  }else{
      message = 'Error al tratar de enviar tu respuesta, por contacta a los novios para informarles.';
  }

  alert(message);
};
