import { AffinityType } from './AffinityType';
import { CustomHooks } from './CustomHooks';
import { EndpointsReq } from './EndpointsReq';
import { NotebookCustomSpec } from './NotebookCustomSpec';
import { VolumeMountRequest } from './VolumeMountRequest';


export class NotebookUpdateRequest {
    public description?: string;
    public endpoints?: Array<EndpointsReq>;
    public flavor?: string;
    private 'custom_spec'?: NotebookCustomSpec;
    private 'image_id'?: string;
    public name?: string;
    private 'storage_new_size'?: number;
    public hooks?: CustomHooks;
    public affinity?: AffinityType;
    private 'dew_secret_name'?: string;
    private 'data_volumes'?: Array<VolumeMountRequest>;
    public constructor() { 
    }
    public withDescription(description: string): NotebookUpdateRequest {
        this['description'] = description;
        return this;
    }
    public withEndpoints(endpoints: Array<EndpointsReq>): NotebookUpdateRequest {
        this['endpoints'] = endpoints;
        return this;
    }
    public withFlavor(flavor: string): NotebookUpdateRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withCustomSpec(customSpec: NotebookCustomSpec): NotebookUpdateRequest {
        this['custom_spec'] = customSpec;
        return this;
    }
    public set customSpec(customSpec: NotebookCustomSpec  | undefined) {
        this['custom_spec'] = customSpec;
    }
    public get customSpec(): NotebookCustomSpec | undefined {
        return this['custom_spec'];
    }
    public withImageId(imageId: string): NotebookUpdateRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withName(name: string): NotebookUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withStorageNewSize(storageNewSize: number): NotebookUpdateRequest {
        this['storage_new_size'] = storageNewSize;
        return this;
    }
    public set storageNewSize(storageNewSize: number  | undefined) {
        this['storage_new_size'] = storageNewSize;
    }
    public get storageNewSize(): number | undefined {
        return this['storage_new_size'];
    }
    public withHooks(hooks: CustomHooks): NotebookUpdateRequest {
        this['hooks'] = hooks;
        return this;
    }
    public withAffinity(affinity: AffinityType): NotebookUpdateRequest {
        this['affinity'] = affinity;
        return this;
    }
    public withDewSecretName(dewSecretName: string): NotebookUpdateRequest {
        this['dew_secret_name'] = dewSecretName;
        return this;
    }
    public set dewSecretName(dewSecretName: string  | undefined) {
        this['dew_secret_name'] = dewSecretName;
    }
    public get dewSecretName(): string | undefined {
        return this['dew_secret_name'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeMountRequest>): NotebookUpdateRequest {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeMountRequest>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeMountRequest> | undefined {
        return this['data_volumes'];
    }
}