import styles from './styles.module.css'
import Styles from '../../Style/index.css'

export default function Profile(props)
{
  return(
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name}></img>
      <h2>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a  href={props.githubUrl} target="_blank">GitHub</a>
        <a href={props.linkedinUrl} target="_blank">Linkedin</a>
        <a  href={props.instagramUrl} target="_blank">Instagram</a>
      </div>
    </div>
  )
}