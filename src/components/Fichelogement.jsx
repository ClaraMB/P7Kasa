import Tags from './../components/Tags';
import Rate from './../components/Rate';
import Carrousel from './Carrousel';
import logements from './../datas/logements.json';
import { useParams } from "react-router-dom";
import '../styles/Fichelogement.css';

const FicheLogement = () => {
    /* Récupère l'id dans l'URL et cherche dans le tableau logements la propiété id qui correspond à l'id présente dans l'URL*/
    const { id } = useParams();

    const ficheLogement = logements.find((logements) => logements.id === id);

    /* Tags */
    const tagsLogement = ficheLogement.tags.map((tags, i) => {
        return <Tags key={i} nom={tags} />;
    });
    
    return (
    
    <div>
        {/* Carrousel */}
        <div className='carrousel'>
            <Carrousel pictures={ficheLogement?.pictures} /> {/* Affiche les images du logement*/}
        </div>

        {/* Titre + localisation */}
        <div className="description_logement">
            <span className="title_logement">{ficheLogement?.title}</span> {/* Affiche le titre du logement. le ? est une protection en cas d'erreur si fichelogement est null ou undefined*/}
            <span className="location_logement">{ficheLogement?.location}</span> {/* Affiche l'emplacement du logement*/}
        </div>
    
        <div className='tag_and_star_block'>
            {/* Tags */}
            <div className='tag_block'>{tagsLogement}</div>
    
            {/* Rating */}
            <div className='star_rating'>
                <Rate score={ficheLogement.rating} />
            </div>
        </div>

    </div>
        )
}


export default FicheLogement;