import axios from 'axios';

const addNameAndConfirmationToGithub = async (
  name: string,
  confirmation: string,
  credentials: {
    token: string,
    repositoryOwner: string,
    repositoryName: string,
    filePath: string,
  } 
): Promise<void> => {
  try {
    // Obtener el contenido actual
    const response = await axios.get(
      `https://api.github.com/repos/${credentials['repositoryOwner ']}/${credentials.repositoryName}/contents/${credentials.filePath}`,
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
      `https://api.github.com/repos/${credentials['repositoryOwner ']}/${credentials.repositoryName}/contents/${credentials.filePath}`,
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
    console.error('Error al agregar nombre y confirmación:', error);
  }
};

export default addNameAndConfirmationToGithub;