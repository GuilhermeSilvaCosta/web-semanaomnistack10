import React, { useEffect, useState } from 'react';

const DevForm = ({ onSubmit }) => {

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err)
            },
            {
            timeout: 30000
            }
        )
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            github_username,
            techs,
            latitude,
            longitude
        }

        await onSubmit(data)

        setGithubUsername('');
        setTechs('');

    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude}
                onChange={e => setLatitude(e.target.value)} 
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;