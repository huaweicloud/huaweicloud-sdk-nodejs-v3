import { AutoExportPolicy } from './AutoExportPolicy';


export class ObsDataRepositoryPolicy {
    private 'auto_export_policy'?: AutoExportPolicy;
    public constructor() { 
    }
    public withAutoExportPolicy(autoExportPolicy: AutoExportPolicy): ObsDataRepositoryPolicy {
        this['auto_export_policy'] = autoExportPolicy;
        return this;
    }
    public set autoExportPolicy(autoExportPolicy: AutoExportPolicy  | undefined) {
        this['auto_export_policy'] = autoExportPolicy;
    }
    public get autoExportPolicy(): AutoExportPolicy | undefined {
        return this['auto_export_policy'];
    }
}