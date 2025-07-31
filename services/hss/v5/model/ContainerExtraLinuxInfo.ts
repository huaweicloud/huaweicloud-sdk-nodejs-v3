

export class ContainerExtraLinuxInfo {
    public os?: string;
    public constructor() { 
    }
    public withOs(os: string): ContainerExtraLinuxInfo {
        this['os'] = os;
        return this;
    }
}