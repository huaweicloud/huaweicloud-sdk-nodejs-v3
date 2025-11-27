import { ResourceKinds } from './ResourceKinds';


export class Match {
    public kinds?: Array<ResourceKinds>;
    public namespaces?: Array<string>;
    public constructor() { 
    }
    public withKinds(kinds: Array<ResourceKinds>): Match {
        this['kinds'] = kinds;
        return this;
    }
    public withNamespaces(namespaces: Array<string>): Match {
        this['namespaces'] = namespaces;
        return this;
    }
}