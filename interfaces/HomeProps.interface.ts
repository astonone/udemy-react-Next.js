import {MenuItem} from './MenuItem.interface';

export interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}