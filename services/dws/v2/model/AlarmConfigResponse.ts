

export class AlarmConfigResponse {
    public id?: string;
    private 'alarm_id'?: string | undefined;
    private 'alarm_name'?: string | undefined;
    private 'name_space'?: string | undefined;
    private 'alarm_level'?: string | undefined;
    private 'is_user_visible'?: string | undefined;
    private 'is_converge'?: string | undefined;
    private 'converge_time'?: number | undefined;
    private 'is_maintain_visible'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): AlarmConfigResponse {
        this['id'] = id;
        return this;
    }
    public withAlarmId(alarmId: string): AlarmConfigResponse {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId() {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): AlarmConfigResponse {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName() {
        return this['alarm_name'];
    }
    public withNameSpace(nameSpace: string): AlarmConfigResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
    public withAlarmLevel(alarmLevel: string): AlarmConfigResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withIsUserVisible(isUserVisible: string): AlarmConfigResponse {
        this['is_user_visible'] = isUserVisible;
        return this;
    }
    public set isUserVisible(isUserVisible: string | undefined) {
        this['is_user_visible'] = isUserVisible;
    }
    public get isUserVisible() {
        return this['is_user_visible'];
    }
    public withIsConverge(isConverge: string): AlarmConfigResponse {
        this['is_converge'] = isConverge;
        return this;
    }
    public set isConverge(isConverge: string | undefined) {
        this['is_converge'] = isConverge;
    }
    public get isConverge() {
        return this['is_converge'];
    }
    public withConvergeTime(convergeTime: number): AlarmConfigResponse {
        this['converge_time'] = convergeTime;
        return this;
    }
    public set convergeTime(convergeTime: number | undefined) {
        this['converge_time'] = convergeTime;
    }
    public get convergeTime() {
        return this['converge_time'];
    }
    public withIsMaintainVisible(isMaintainVisible: string): AlarmConfigResponse {
        this['is_maintain_visible'] = isMaintainVisible;
        return this;
    }
    public set isMaintainVisible(isMaintainVisible: string | undefined) {
        this['is_maintain_visible'] = isMaintainVisible;
    }
    public get isMaintainVisible() {
        return this['is_maintain_visible'];
    }
}