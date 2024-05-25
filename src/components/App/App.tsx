import { ChangeEvent, useState } from 'react'
import { data, getData } from '../../services/serv'

export default function App() {
  console.log('value', data.value)
  const [pdf, setPdf] = useState<string>()

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target
    const selectedFile = target.files ? target.files[0] : null
    if (selectedFile) {
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>): void => {
        const base64Data = e.target?.result
        const byteCharacters = atob((base64Data as string).split(',')[1])
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(blob)
        // window.open(fileURL);
        // const alink = document.createElement('a')
        // alink.href =
        // alink.download = 'Test.pdf'
        setPdf(fileURL)
        // alink.click()
        console.log('ENTRA 1', { base64Data })
      }

      reader.readAsDataURL(selectedFile)
    }
  }
  return (
    <div>
      {Array.from(Array(100), (_, i) => (
        <button key={`${i}`} onClick={getData}>
          click me
        </button>
      ))}
      <h1>PDF Example by Object Tag</h1>
      {pdf && (
        <object data={pdf} type='application/pdf' width='100%' height='678px'>
          <iframe src={pdf} width='500' height='678'>
            <p>This browser does not support PDF!</p>
          </iframe>
        </object>
      )}
      <input type='file' accept='image/*,application/pdf' onChange={handleFileSelect} />
    </div>
  )
}
