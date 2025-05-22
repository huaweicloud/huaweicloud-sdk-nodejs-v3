

export class FlavorInfoResponse {
    public id?: string;
    public name?: string;
    public vcpus?: string;
    public ram?: string;
    private 'is_current_flavor'?: boolean;
    public constructor() { 
    }
    public withId(id: string): FlavorInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorInfoResponse {
        this['name'] = name;
        return this;
    }
    public withVcpus(vcpus: string): FlavorInfoResponse {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): FlavorInfoResponse {
        this['ram'] = ram;
        return this;
    }
    public withIsCurrentFlavor(isCurrentFlavor: boolean): FlavorInfoResponse {
        this['is_current_flavor'] = isCurrentFlavor;
        return this;
    }
    public set isCurrentFlavor(isCurrentFlavor: boolean  | undefined) {
        this['is_current_flavor'] = isCurrentFlavor;
    }
    public get isCurrentFlavor(): boolean | undefined {
        return this['is_current_flavor'];
    }
}