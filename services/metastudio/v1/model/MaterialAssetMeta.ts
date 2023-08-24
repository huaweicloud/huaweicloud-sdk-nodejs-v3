import { MaterialComponentInfo } from './MaterialComponentInfo';


export class MaterialAssetMeta {
    public components?: Array<MaterialComponentInfo>;
    public constructor() { 
    }
    public withComponents(components: Array<MaterialComponentInfo>): MaterialAssetMeta {
        this['components'] = components;
        return this;
    }
}