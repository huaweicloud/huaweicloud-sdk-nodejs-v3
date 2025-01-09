

export class PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions {
    private 'network_drive_mapping_path'?: string;
    private 'drive_letter'?: string;
    public constructor() { 
    }
    public withNetworkDriveMappingPath(networkDriveMappingPath: string): PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions {
        this['network_drive_mapping_path'] = networkDriveMappingPath;
        return this;
    }
    public set networkDriveMappingPath(networkDriveMappingPath: string  | undefined) {
        this['network_drive_mapping_path'] = networkDriveMappingPath;
    }
    public get networkDriveMappingPath(): string | undefined {
        return this['network_drive_mapping_path'];
    }
    public withDriveLetter(driveLetter: string): PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions {
        this['drive_letter'] = driveLetter;
        return this;
    }
    public set driveLetter(driveLetter: string  | undefined) {
        this['drive_letter'] = driveLetter;
    }
    public get driveLetter(): string | undefined {
        return this['drive_letter'];
    }
}