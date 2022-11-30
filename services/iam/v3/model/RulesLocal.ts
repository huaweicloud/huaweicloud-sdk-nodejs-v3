import { RulesLocalGroup } from './RulesLocalGroup';
import { RulesLocalGroups } from './RulesLocalGroups';
import { RulesLocalUser } from './RulesLocalUser';


export class RulesLocal {
    public user?: RulesLocalUser;
    public group?: RulesLocalGroup;
    public groups?: RulesLocalGroups;
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
    public withGroups(groups: RulesLocalGroups): RulesLocal {
        this['groups'] = groups;
        return this;
    }
}