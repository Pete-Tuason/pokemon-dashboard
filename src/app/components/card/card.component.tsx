import { WidgetType } from '../../types/widget.type';
import classNames from './card.module.scss';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { useCallback, useEffect, useState } from 'react';
import { PokemonType } from '../../types/pokemon.type';

export interface ICardComponentComponentProps {
    widget: WidgetType
};

const CardComponent: React.FunctionComponent<ICardComponentComponentProps> = props => {
    const [pokemonCount, setPokemonCount] = useState(0)

    const getPokemonCount = useCallback(async () => {
        const response = await fetch(props.widget.api);
        const data: PokemonType = await response.json();
        setPokemonCount(data.pokemon_species_details.length);
    }, [props.widget.api]);

    useEffect(() => {
        getPokemonCount();
    }, [getPokemonCount]);

    return (
        <div data-testid="card">
            <Card className={classNames.card}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h4" className={classNames.cardTitle}>
                        {props.widget.title}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                        {pokemonCount.toString()}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComponent;