import { NovaLink } from './NovaLink';


export class NovaServerFlavor {
    public id?: string;
    public links?: Array<NovaLink>;
    public vcpus?: number;
    public ram?: number;
    public disk?: number;
    public ephemeral?: number;
    public swap?: number;
    private 'original_name'?: string | undefined;
    private 'extra_specs'?: { [key: string]: string; } | undefined;
    public constructor() { 
    }
    public withId(id: string): NovaServerFlavor {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaServerFlavor {
        this['links'] = links;
        return this;
    }
    public withVcpus(vcpus: number): NovaServerFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): NovaServerFlavor {
        this['ram'] = ram;
        return this;
    }
    public withDisk(disk: number): NovaServerFlavor {
        this['disk'] = disk;
        return this;
    }
    public withEphemeral(ephemeral: number): NovaServerFlavor {
        this['ephemeral'] = ephemeral;
        return this;
    }
    public withSwap(swap: number): NovaServerFlavor {
        this['swap'] = swap;
        return this;
    }
    public withOriginalName(originalName: string): NovaServerFlavor {
        this['original_name'] = originalName;
        return this;
    }
    public set originalName(originalName: string | undefined) {
        this['original_name'] = originalName;
    }
    public get originalName() {
        return this['original_name'];
    }
    public withExtraSpecs(extraSpecs: { [key: string]: string; }): NovaServerFlavor {
        this['extra_specs'] = extraSpecs;
        return this;
    }
    public set extraSpecs(extraSpecs: { [key: string]: string; } | undefined) {
        this['extra_specs'] = extraSpecs;
    }
    public get extraSpecs() {
        return this['extra_specs'];
    }
}