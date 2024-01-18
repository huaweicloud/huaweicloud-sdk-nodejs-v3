

export class CreateDialogUrlReq {
    private 'room_id'?: string;
    private 'robot_id'?: string;
    public constructor(roomId?: string, robotId?: string) { 
        this['room_id'] = roomId;
        this['robot_id'] = robotId;
    }
    public withRoomId(roomId: string): CreateDialogUrlReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRobotId(robotId: string): CreateDialogUrlReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
}