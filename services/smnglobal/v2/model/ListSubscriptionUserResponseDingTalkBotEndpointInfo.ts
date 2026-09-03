

export class ListSubscriptionUserResponseDingTalkBotEndpointInfo {
    public endpoint?: string;
    private 'robot_code'?: string;
    public constructor() { 
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseDingTalkBotEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRobotCode(robotCode: string): ListSubscriptionUserResponseDingTalkBotEndpointInfo {
        this['robot_code'] = robotCode;
        return this;
    }
    public set robotCode(robotCode: string  | undefined) {
        this['robot_code'] = robotCode;
    }
    public get robotCode(): string | undefined {
        return this['robot_code'];
    }
}