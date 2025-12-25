

export class Result {
    private 'average_msg_bytes'?: number;
    private 'subscribe_msgs'?: number;
    public constructor(averageMsgBytes?: number, subscribeMsgs?: number) { 
        this['average_msg_bytes'] = averageMsgBytes;
        this['subscribe_msgs'] = subscribeMsgs;
    }
    public withAverageMsgBytes(averageMsgBytes: number): Result {
        this['average_msg_bytes'] = averageMsgBytes;
        return this;
    }
    public set averageMsgBytes(averageMsgBytes: number  | undefined) {
        this['average_msg_bytes'] = averageMsgBytes;
    }
    public get averageMsgBytes(): number | undefined {
        return this['average_msg_bytes'];
    }
    public withSubscribeMsgs(subscribeMsgs: number): Result {
        this['subscribe_msgs'] = subscribeMsgs;
        return this;
    }
    public set subscribeMsgs(subscribeMsgs: number  | undefined) {
        this['subscribe_msgs'] = subscribeMsgs;
    }
    public get subscribeMsgs(): number | undefined {
        return this['subscribe_msgs'];
    }
}