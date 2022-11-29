import { WidgetType } from '../../types/widget.type';
import { CardSubtitle, CardTitle, List } from 'reactstrap';
import classNames from './list.module.scss';
import { useEffect, useState } from 'react';
import { PokemonSpeciesType } from '../../types/pokemon-species.type';

export interface IListComponentProps {
    widget: WidgetType
};

const ListComponent: React.FunctionComponent<IListComponentProps> = props => {
    const [pokemonList, setPokemonList] = useState<PokemonSpeciesType[] | []>([])
    
    const getPokemonCount = async () => {
        const response = await fetch(props.widget.api);
        const data = await response.json();

        setPokemonList(data.results);
    }

    useEffect(() => {
        getPokemonCount();
    });

    return (
        <div data-testid="list" className={classNames.listContainer}>
            <CardTitle tag="h4" className={classNames.listTitle}>
                {props.widget.title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {props.widget.subtitle}
            </CardSubtitle>
            <List className={classNames.list}>
                {pokemonList.map((value: PokemonSpeciesType, index: number) => (
                    <li className={classNames.textProper} key={`${index}-${value.name}`}>{value.name}</li>
                ))}
            </List>
        </div>
    );
};

export default ListComponent;