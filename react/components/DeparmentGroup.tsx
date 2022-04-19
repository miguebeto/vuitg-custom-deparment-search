import React from 'react';

type Props = {
    deparments: [Category],
    handleSetSlug: any
}

type Category = {
    id: number,
    name: string,
    slug: string
}

const DeparmentGroup = ({ deparments, handleSetSlug }: Props)=> {
    console.log("mi grupo de departamentos es:", deparments);
    const onHandleSetSlug = (event: any) => {
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft}`)
    }
    const deparmentOption: any = deparments.map((deparment: Category) => {
        return (
            <option 
            value={deparment.slug}
            key={deparment.id}
            >
                {deparment.name}
            </option>
        )
    })
    return (
        <select 
            onChange={onHandleSetSlug}
            defaultValue="value0"
            >
            <option disabled value="value0">Seleccione una opción</option>
            {deparmentOption}
        </select>
    )
}

export default DeparmentGroup;