import { category } from "./category";

export interface products{
    id : number;
    name : string;
    description : string;
    price : number;
    category : category;
    promotion: boolean;
    newproduct: boolean;
}