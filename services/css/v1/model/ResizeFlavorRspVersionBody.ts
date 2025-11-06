import { ResizeFlavor } from './ResizeFlavor';


export class ResizeFlavorRspVersionBody {
    public id?: string;
    public name?: string;
    public flavors?: Array<ResizeFlavor>;
    public constructor() { 
    }
    public withId(id: string): ResizeFlavorRspVersionBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResizeFlavorRspVersionBody {
        this['name'] = name;
        return this;
    }
    public withFlavors(flavors: Array<ResizeFlavor>): ResizeFlavorRspVersionBody {
        this['flavors'] = flavors;
        return this;
    }
}