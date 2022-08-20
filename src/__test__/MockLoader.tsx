import { Locators } from "./constants";

export enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

type Props = {
   loading?: boolean;
};

export const Loader: React.FC<Props> = ({ loading = true }: Props) => loading ? <div data-testid={Locators.LOADER} /> : null;
