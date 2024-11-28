import { config } from '$/extra/config'
import { Trains, TrainsData } from '@/types/include'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useTrains({ from, to }: TrainsData) {
    const [data, setData] = useState<Trains[]>([])

    useEffect(() => {
        axios.get(config.apis.estacionesTrenes).then((response) => {
            if (response.status === 200) {
                
            }
        })
    }, [axios])

    return data
}