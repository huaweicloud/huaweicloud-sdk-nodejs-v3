import { AssociateErInstanceDocument } from './AssociateErInstanceDocument';
import { CentralNetworkPlaneDocument } from './CentralNetworkPlaneDocument';


export class CentralNetworkPolicyDocument {
    private 'default_plane'?: string;
    public planes?: Array<CentralNetworkPlaneDocument>;
    private 'er_instances'?: Array<AssociateErInstanceDocument>;
    public constructor(defaultPlane?: string, planes?: Array<CentralNetworkPlaneDocument>) { 
        this['default_plane'] = defaultPlane;
        this['planes'] = planes;
    }
    public withDefaultPlane(defaultPlane: string): CentralNetworkPolicyDocument {
        this['default_plane'] = defaultPlane;
        return this;
    }
    public set defaultPlane(defaultPlane: string  | undefined) {
        this['default_plane'] = defaultPlane;
    }
    public get defaultPlane(): string | undefined {
        return this['default_plane'];
    }
    public withPlanes(planes: Array<CentralNetworkPlaneDocument>): CentralNetworkPolicyDocument {
        this['planes'] = planes;
        return this;
    }
    public withErInstances(erInstances: Array<AssociateErInstanceDocument>): CentralNetworkPolicyDocument {
        this['er_instances'] = erInstances;
        return this;
    }
    public set erInstances(erInstances: Array<AssociateErInstanceDocument>  | undefined) {
        this['er_instances'] = erInstances;
    }
    public get erInstances(): Array<AssociateErInstanceDocument> | undefined {
        return this['er_instances'];
    }
}