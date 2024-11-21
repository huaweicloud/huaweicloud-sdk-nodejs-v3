import { RulesLocalGroup } from './RulesLocalGroup';
import { RulesLocalUser } from './RulesLocalUser';


export class RulesLocal {
    public user?: RulesLocalUser;
    public group?: RulesLocalGroup;
    public constructor() { 
    }
    public withUser(user: RulesLocalUser): RulesLocal {
        this['user'] = user;
        return this;
    }
    public withGroup(group: RulesLocalGroup): RulesLocal {
        this['group'] = group;
        return this;
    }
}