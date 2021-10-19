import { useHistory } from 'react-router';

const Utilitis = (id) => {

    const history = useHistory()
    
    const drugHandler = (id) => {
        history.push(`/drug/${id}`)
    }
    const foundDrug = (datas,id) => {
        const found = datas.find(item => item.id === parseFloat(id))
        console.log(datas);
        return found
    }

    return (
        {
            drugHandler,
            foundDrug
        }
    );
};

export default Utilitis;