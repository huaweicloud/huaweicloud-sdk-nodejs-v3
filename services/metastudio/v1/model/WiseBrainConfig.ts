

export class WiseBrainConfig {
    private 'role_id'?: string;
    private 'sis_region'?: number;
    private 'sis_project_id'?: string;
    private 'enable_hot_words'?: boolean;
    public constructor() { 
    }
    public withRoleId(roleId: string): WiseBrainConfig {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withSisRegion(sisRegion: number): WiseBrainConfig {
        this['sis_region'] = sisRegion;
        return this;
    }
    public set sisRegion(sisRegion: number  | undefined) {
        this['sis_region'] = sisRegion;
    }
    public get sisRegion(): number | undefined {
        return this['sis_region'];
    }
    public withSisProjectId(sisProjectId: string): WiseBrainConfig {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
    public withEnableHotWords(enableHotWords: boolean): WiseBrainConfig {
        this['enable_hot_words'] = enableHotWords;
        return this;
    }
    public set enableHotWords(enableHotWords: boolean  | undefined) {
        this['enable_hot_words'] = enableHotWords;
    }
    public get enableHotWords(): boolean | undefined {
        return this['enable_hot_words'];
    }
}