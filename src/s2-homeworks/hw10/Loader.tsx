import s from './Loader.module.css'
import loader from '../hw10/loader.svg'
export const Loader = () => <div className={s.loader}><div className={s.img}>
    <img src={loader} alt=""/>
</div></div>
