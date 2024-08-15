

export class ScheduleGroupInfo {
    private 'role_id'?: string;
    private 'scene_id'?: string;
    public constructor(roleId?: string, sceneId?: string) { 
        this['role_id'] = roleId;
        this['scene_id'] = sceneId;
    }
    public withRoleId(roleId: string): ScheduleGroupInfo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withSceneId(sceneId: string): ScheduleGroupInfo {
        this['scene_id'] = sceneId;
        return this;
    }
    public set sceneId(sceneId: string  | undefined) {
        this['scene_id'] = sceneId;
    }
    public get sceneId(): string | undefined {
        return this['scene_id'];
    }
}