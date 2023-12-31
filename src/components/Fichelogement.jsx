import Tags from './../components/Tags';
import Rate from './../components/Rate';
import Collapse from './../components/Collapse';
import Carrousel from './Carrousel';
import Host from './../components/Host';
import logements from './../datas/logements.json';
import { useParams, Navigate } from "react-router-dom";
import '../styles/Fichelogement.css';

const FicheLogement = () => {
    /* Récupère l'id dans l'URL et cherche dans le tableau logements la propiété id qui correspond à l'id présente dans l'URL*/
    const { id } = useParams();

    const ficheLogement = logements.find((logements) => logements.id === id);

    /* Si le logement n'a pas été trouvé on effectue la redirection vers la page d'erreur*/
    if (!ficheLogement) {
        return <Navigate to="/Error" />;
    }

    /* Tags */
    const tagsLogement = ficheLogement.tags.map((tags, i) => {
        return <Tags key={i} nom={tags} />;
    });
    
     /* Équipements */
    const equipements = ficheLogement?.equipments.map((equipment, i) => {
        return (
        <ul key={i}>
            {equipment}
        </ul>
        );
    });

    return (
    
    <div>
        {/* Carrousel */}
        <div className="carrousel">
            <Carrousel pictures={ficheLogement?.pictures} /> {/* Affiche les images du logement*/}
        </div>

    <div className='main_block'>
        {/* Titre + localisation */}
        <div className="description_logement">
            <div>
                <div className='title-and-location'>
                    <span className="title_logement">{ficheLogement?.title}</span> {/* Affiche le titre du logement. le ? est une protection en cas d'erreur si fichelogement est null ou undefined*/}
                    <span className="location_logement">{ficheLogement?.location}</span> {/* Affiche l'emplacement du logement*/}
                </div>
        
                {/* Tags */}
                <div className='tag_block'>{tagsLogement}</div>
            </div>
            <div className='host-and-star'>
                {/* Host */}
                <div className="host">
                    <Host name={ficheLogement?.host.name} picture={ficheLogement?.host.picture}/>
                </div>
                {/* Rating */}
                <div className='star_rating'>
                        <Rate score={ficheLogement.rating} />
                </div>
            </div>
        </div>

            {/* Collapse Description + Equipement */}
        <div className='collapse_container'>
            <div className="collapse_description">
                <Collapse title="Description" content={ficheLogement?.description}/>
            </div>

            <div className="collapse_equipement">
                <Collapse title="Équipements" content={equipements} />
            </div>
        </div>
    </div>
    </div>
        )
}


export default FicheLogement;