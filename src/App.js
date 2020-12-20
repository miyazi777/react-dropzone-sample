import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

function App() {
  const onDropAccepted = useCallback(files => {
    console.log('accecepted files', files);
    // TODO ファイルに対してなんらかの処理
  }, []);

  const onDropRejected = useCallback(files => {
    console.log('rejected files', files);
    // TODO エラーファイル処理
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: ['image/*'],
    onDropAccepted,
    onDropRejected,
  });

  return (
    <div className="App">
      <div {...getRootProps()}>
        <span>upload file</span>
        <input {...getInputProps()} />
      </div>
    </div>
  );
}

export default App;
