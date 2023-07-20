import { Single2HaObject } from './Single2HaObject';


export class Single2Ha {
    private 'single_to_ha'?: Single2HaObject;
    public constructor(singleToHa?: Single2HaObject) { 
        this['single_to_ha'] = singleToHa;
    }
    public withSingleToHa(singleToHa: Single2HaObject): Single2Ha {
        this['single_to_ha'] = singleToHa;
        return this;
    }
    public set singleToHa(singleToHa: Single2HaObject  | undefined) {
        this['single_to_ha'] = singleToHa;
    }
    public get singleToHa(): Single2HaObject | undefined {
        return this['single_to_ha'];
    }
}