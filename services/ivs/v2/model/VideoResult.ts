import { ActionsList } from './ActionsList';


export class VideoResult {
    public alive: boolean;
    public actions: Array<ActionsList>;
    public picture: string;
    public constructor(alive?: any, actions?: any, picture?: any) { 
        this['alive'] = alive;
        this['actions'] = actions;
        this['picture'] = picture;
    }
    public withAlive(alive: boolean): VideoResult {
        this['alive'] = alive;
        return this;
    }
    public withActions(actions: Array<ActionsList>): VideoResult {
        this['actions'] = actions;
        return this;
    }
    public withPicture(picture: string): VideoResult {
        this['picture'] = picture;
        return this;
    }
}