import { VirtualSpace } from './VirtualSpace';


export class StorageGroups {
    public name: string;
    public cceManaged?: boolean;
    public selectorNames: Array<string>;
    public virtualSpaces: Array<VirtualSpace>;
    public constructor(name?: any, selectorNames?: any, virtualSpaces?: any) { 
        this['name'] = name;
        this['selectorNames'] = selectorNames;
        this['virtualSpaces'] = virtualSpaces;
    }
    public withName(name: string): StorageGroups {
        this['name'] = name;
        return this;
    }
    public withCceManaged(cceManaged: boolean): StorageGroups {
        this['cceManaged'] = cceManaged;
        return this;
    }
    public withSelectorNames(selectorNames: Array<string>): StorageGroups {
        this['selectorNames'] = selectorNames;
        return this;
    }
    public withVirtualSpaces(virtualSpaces: Array<VirtualSpace>): StorageGroups {
        this['virtualSpaces'] = virtualSpaces;
        return this;
    }
}