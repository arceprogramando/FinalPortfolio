import { useState } from 'react';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = 'https://formspree.io/f/moqozkdl';

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('email', email);
    formData.append('mensaje', mensaje);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        console.log('Formulario enviado con éxito');
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div id='contacto' className="max-w-md mx-auto m-8 ">
      <h2 className="text-2xl font-medium mb-4 text-center">Contáctame</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium ">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder='Escribe tu Nombre'

            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium t">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Escribe tu email'

            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium ">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            rows="4"
            placeholder='Escribe un mensaje'
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div className='text-center'>
          <button
            type="submit"
            className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;