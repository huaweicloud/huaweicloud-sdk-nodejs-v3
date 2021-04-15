

export class CCEClusterNodeInformationMetadata {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CCEClusterNodeInformationMetadata {
        this['name'] = name;
        return this;
    }
}