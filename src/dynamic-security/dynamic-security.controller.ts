import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DynamicSecurityService } from './dynamic-security.service';
import {
    IAddClientRoleRequest,
    IAddClientRoleResponse,
    IAddGroupClientRequest,
    IAddGroupClientResponse,
    IAddGroupRoleRequest,
    IAddGroupRoleResponse,
    IAddRoleACLRequest,
    IAddRoleACLResponse,
    ICreateClientRequest,
    ICreateClientResponse,
    ICreateGroupRequest,
    ICreateGroupResponse,
    ICreateRoleRequest,
    ICreateRoleResponse,
    IDeleteClientRequest,
    IDeleteClientResponse,
    IDeleteGroupRequest,
    IDeleteGroupResponse,
    IDeleteRoleRequest,
    IDeleteRoleResponse,
    IDisableClientRequest,
    IDisableClientResponse,
    IEnableClientRequest,
    IEnableClientResponse,
    IGetAnonymousGroupResponse,
    IGetClientRequest,
    IGetClientResponse,
    IGetDefaultACLAccessRequest,
    IGetDefaultACLAccessResponse,
    IGetGroupRequest,
    IGetGroupResponse,
    IGetRoleRequest,
    IGetRoleResponse,
    IListClientsRequest,
    IListClientsResponse,
    IListGroupsRequest,
    IListGroupsResponse,
    IListRolesRequest,
    IListRolesResponse,
    IRemoveClientRoleRequest,
    IRemoveClientRoleResponse,
    IRemoveGroupClientRequest,
    IRemoveGroupClientResponse,
    IRemoveGroupRoleRequest,
    IRemoveGroupRoleResponse,
    IRemoveRoleACLRequest,
    IRemoveRoleACLResponse,
    ISetAnonymousGroupRequest,
    ISetAnonymousGroupResponse,
    ISetClientIdRequest,
    ISetClientIdResponse,
    ISetClientPasswordRequest,
    ISetClientPasswordResponse,
    ISetDefaultACLAccessRequest,
    ISetDefaultACLAccessResponse,
    MqttSvcMessageEnum
} from '@hlutir/common';

@Controller('dynamic-security')
export class DynamicSecurityController {
    constructor(private readonly dynamicSecurityService: DynamicSecurityService) {}

    //
    // General
    //

    @MessagePattern(MqttSvcMessageEnum.GET_DEFAULT_ACL_ACCESS)
    getDefaultACLAccess(@Payload() data: IGetDefaultACLAccessRequest): Promise<IGetDefaultACLAccessResponse> {
        return this.dynamicSecurityService.getDefaultACLAccess();
    }
    
    @MessagePattern(MqttSvcMessageEnum.SET_DEFAULT_ACL_ACCESS)
    async setDefaultACLAccess(@Payload() data: ISetDefaultACLAccessRequest): Promise<ISetDefaultACLAccessResponse> {
        // @ts-ignore
        await this.dynamicSecurityService.setDefaultACLAccess(data.acls);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.GET_ANONYMOUS_GROUP)
    getAnonymousGroup(@Payload() data: IGetDefaultACLAccessRequest): Promise<IGetAnonymousGroupResponse> {
        return this.dynamicSecurityService.getAnonymousGroup();
    }

    @MessagePattern(MqttSvcMessageEnum.SET_ANONYMOUS_GROUP)
    async setAnonymousGroup(@Payload() data: ISetAnonymousGroupRequest): Promise<ISetAnonymousGroupResponse> {
        await this.dynamicSecurityService.setAnonymousGroup(data.groupname);
        return {};
    }

    //
    // Clients
    //

    @MessagePattern(MqttSvcMessageEnum.CREATE_CLIENT)
    async createClient(@Payload() data: ICreateClientRequest): Promise<ICreateClientResponse> {
        await this.dynamicSecurityService.createClient(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.DELETE_CLIENT)
    async deleteClient(@Payload() data: IDeleteClientRequest): Promise<IDeleteClientResponse> {
        await this.dynamicSecurityService.deleteClient(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.SET_CLIENT_PASSWORD)
    async setClientPassword(@Payload() data: ISetClientPasswordRequest): Promise<ISetClientPasswordResponse> {
        await this.dynamicSecurityService.setClientPassword(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.SET_CLIENT_ID)
    async setClientId(@Payload() data: ISetClientIdRequest): Promise<ISetClientIdResponse> {
        await this.dynamicSecurityService.setClientId(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.ADD_CLIENT_ROLE)
    async addClientRole(@Payload() data: IAddClientRoleRequest): Promise<IAddClientRoleResponse> {
        await this.dynamicSecurityService.addClientRole(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.REMOVE_CLIENT_ROLE)
    async removeClientRole(@Payload() data: IRemoveClientRoleRequest): Promise<IRemoveClientRoleResponse> {
        await this.dynamicSecurityService.removeClientRole(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.GET_CLIENT)
    getClient(@Payload() data: IGetClientRequest): Promise<IGetClientResponse> {
        return this.dynamicSecurityService.getClient(data.username);
    }

    @MessagePattern(MqttSvcMessageEnum.LIST_CLIENTS)
    listClients(@Payload() data: IListClientsRequest): Promise<IListClientsResponse> {
        return this.dynamicSecurityService.listClients(data);
    }

    @MessagePattern(MqttSvcMessageEnum.ENABLE_CLIENT)
    async enableClient(@Payload() data: IEnableClientRequest): Promise<IEnableClientResponse> {
        await this.dynamicSecurityService.enableClient(data.username);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.DISABLE_CLIENT)
    async disableClient(@Payload() data: IDisableClientRequest): Promise<IDisableClientResponse> {
        await this.dynamicSecurityService.disableClient(data.username);
        return {};
    }

    //
    // Groups
    //

    @MessagePattern(MqttSvcMessageEnum.CREATE_GROUP)
    async createGroup(@Payload() data: ICreateGroupRequest): Promise<ICreateGroupResponse> {
        await this.dynamicSecurityService.createGroup(data);
        return {};
    }
    
    @MessagePattern(MqttSvcMessageEnum.DELETE_GROUP)
    async deleteGroup(@Payload() data: IDeleteGroupRequest): Promise<IDeleteGroupResponse> {
        await this.dynamicSecurityService.deleteGroup(data.groupname);
        return {};
    }
    
    @MessagePattern(MqttSvcMessageEnum.ADD_GROUP_ROLE)
    async addGroupRole(@Payload() data: IAddGroupRoleRequest): Promise<IAddGroupRoleResponse> {
        await this.dynamicSecurityService.addGroupRole(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.REMOVE_GROUP_ROLE)
    async removeGroupRole(@Payload() data: IRemoveGroupRoleRequest): Promise<IRemoveGroupRoleResponse> {
        await this.dynamicSecurityService.removeGroupRole(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.ADD_GROUP_CLIENT)
    async addGroupClient(@Payload() data: IAddGroupClientRequest): Promise<IAddGroupClientResponse> {
        await this.dynamicSecurityService.addGroupClient(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.REMOVE_GROUP_CLIENT)
    async removeGroupClient(@Payload() data: IRemoveGroupClientRequest): Promise<IRemoveGroupClientResponse> {
        await this.dynamicSecurityService.removeGroupClient(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.GET_GROUP)
    getGroup(@Payload() data: IGetGroupRequest): Promise<IGetGroupResponse> {
        return this.dynamicSecurityService.getGroup(data.groupname);
    }

    @MessagePattern(MqttSvcMessageEnum.LIST_GROUPS)
    listGroups(@Payload() data: IListGroupsRequest): Promise<IListGroupsResponse> {
        return this.dynamicSecurityService.listGroups(data);
    }

    //
    // Roles
    //

    @MessagePattern(MqttSvcMessageEnum.CREATE_ROLE)
    async createRole(@Payload() data: ICreateRoleRequest): Promise<ICreateRoleResponse> {
        // @ts-ignore
        await this.dynamicSecurityService.createRole(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.DELETE_ROLE)
    async deleteRole(@Payload() data: IDeleteRoleRequest): Promise<IDeleteRoleResponse> {
        await this.dynamicSecurityService.deleteRole(data.rolename);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.ADD_ROLE_ACL)
    async addRoleACL(@Payload() data: IAddRoleACLRequest): Promise<IAddRoleACLResponse> {
        // @ts-ignore
        await this.dynamicSecurityService.addRoleACL(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.REMOVE_ROLE_ACL)
    async removeRoleACL(@Payload() data: IRemoveRoleACLRequest): Promise<IRemoveRoleACLResponse> {
        // @ts-ignore
        await this.dynamicSecurityService.removeRoleACL(data);
        return {};
    }

    @MessagePattern(MqttSvcMessageEnum.GET_ROLE)
    getRole(@Payload() data: IGetRoleRequest): Promise<IGetRoleResponse> {
        return this.dynamicSecurityService.getRole(data.rolename);
    }

    @MessagePattern(MqttSvcMessageEnum.LIST_ROLES)
    listRoles(@Payload() data: IListRolesRequest): Promise<IListRolesResponse> {
        // @ts-ignore
        return this.dynamicSecurityService.listRoles(data);
    }
}
