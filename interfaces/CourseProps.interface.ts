import {MenuItem} from './MenuItem.interface';
import {TopPageModel} from './Page.interface';
import {ProductModel} from './Product.interface';

export interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
    page: TopPageModel,
    products: ProductModel[]
}