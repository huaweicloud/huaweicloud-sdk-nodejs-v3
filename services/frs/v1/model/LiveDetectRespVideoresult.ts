import { ActionsList } from './ActionsList';


export class LiveDetectRespVideoresult {
    public alive?: boolean;
    public actions?: Array<ActionsList>;
    public picture?: string;
    public constructor() { 
    }
    public withAlive(alive: boolean): LiveDetectRespVideoresult {
        this['alive'] = alive;
        return this;
    }
    public withActions(actions: Array<ActionsList>): LiveDetectRespVideoresult {
        this['actions'] = actions;
        return this;
    }
    public withPicture(picture: string): LiveDetectRespVideoresult {
        this['picture'] = picture;
        return this;
    }
}