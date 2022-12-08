

export class IpsSwitchResponseDTO {
    public id?: string;
    private 'basic_defense_status'?: number | undefined;
    private 'virtual_patches_status'?: number | undefined;
    public constructor() { 
    }
    public withId(id: string): IpsSwitchResponseDTO {
        this['id'] = id;
        return this;
    }
    public withBasicDefenseStatus(basicDefenseStatus: number): IpsSwitchResponseDTO {
        this['basic_defense_status'] = basicDefenseStatus;
        return this;
    }
    public set basicDefenseStatus(basicDefenseStatus: number | undefined) {
        this['basic_defense_status'] = basicDefenseStatus;
    }
    public get basicDefenseStatus() {
        return this['basic_defense_status'];
    }
    public withVirtualPatchesStatus(virtualPatchesStatus: number): IpsSwitchResponseDTO {
        this['virtual_patches_status'] = virtualPatchesStatus;
        return this;
    }
    public set virtualPatchesStatus(virtualPatchesStatus: number | undefined) {
        this['virtual_patches_status'] = virtualPatchesStatus;
    }
    public get virtualPatchesStatus() {
        return this['virtual_patches_status'];
    }
}