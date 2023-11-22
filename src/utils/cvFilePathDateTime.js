const generateCVFilePath = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();
  
    const cvFilePath = '/curriculumvitae.pdf';
    const cvFileName = 'ArceFelipe';
  
    return {
      filePath: cvFilePath,
      fileName: `CurriculumVitae_${cvFileName}_${month}_${year}.pdf`,
    };
  };
  
  export const downloadCVFile = () => {
    const { filePath, fileName } = generateCVFilePath();
    const link = document.createElement('a');
  
    link.href = filePath;
    link.download = fileName;
    link.click();
  };