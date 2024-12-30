// This file is auto-generated by @hey-api/openapi-ts

export type CreateProjectDto = {
    /**
     * Project name
     */
    name: string;
    /**
     * Project slug
     */
    slug: string;
    status: string;
    collaborators: Array<(string)>;
};

export type CreateTaskDto = {
    /**
     * Task name
     */
    name: string;
    /**
     * Task description
     */
    description: string;
    status: string;
    due_date?: string;
    project_id?: number;
    collaborators: Array<(string)>;
};

export type Project = {
    /**
     * The unique identifier
     */
    id: number;
    /**
     * Creation date
     */
    created_at: string;
    /**
     * Project name
     */
    name: string;
    /**
     * Project slug
     */
    slug: string;
    /**
     * Project status
     */
    status: string;
    /**
     * List of collaborators emails
     */
    collaborators: Array<(string)>;
};

export type Task = {
    /**
     * The unique identifier
     */
    id: number;
    /**
     * Creation date
     */
    created_at: string;
    /**
     * Task name
     */
    name: string;
    /**
     * Task description
     */
    description: string;
    /**
     * Task status
     */
    status: string;
    /**
     * Due date
     */
    due_date: string;
    /**
     * Project ID
     */
    project_id: number;
    /**
     * List of collaborators emails
     */
    collaborators: Array<(string)>;
};

export type AppControllerGetHelloResponse = (unknown);

export type AppControllerGetHelloError = unknown;

export type ProjectsControllerCreateData = {
    body: CreateProjectDto;
};

export type ProjectsControllerCreateResponse = (Project);

export type ProjectsControllerCreateError = unknown;

export type ProjectsControllerFindAllResponse = (Array<Project>);

export type ProjectsControllerFindAllError = unknown;

export type ProjectsControllerFindOneData = {
    path: {
        id: string;
    };
};

export type ProjectsControllerFindOneResponse = (Project);

export type ProjectsControllerFindOneError = (unknown);

export type ProjectsControllerUpdateData = {
    path: {
        id: string;
    };
};

export type ProjectsControllerUpdateResponse = (Project);

export type ProjectsControllerUpdateError = unknown;

export type ProjectsControllerRemoveData = {
    path: {
        id: string;
    };
};

export type ProjectsControllerRemoveResponse = (unknown);

export type ProjectsControllerRemoveError = unknown;

export type TasksControllerCreateData = {
    body: CreateTaskDto;
};

export type TasksControllerCreateResponse = (Task);

export type TasksControllerCreateError = (unknown);

export type TasksControllerFindAllResponse = (Array<Task>);

export type TasksControllerFindAllError = unknown;

export type TasksControllerFindOneData = {
    path: {
        /**
         * Task identifier
         */
        id: number;
    };
};

export type TasksControllerFindOneResponse = (Task);

export type TasksControllerFindOneError = (unknown);

export type TasksControllerUpdateData = {
    /**
     * Fields to update. All fields are optional.
     */
    body: CreateTaskDto;
    path: {
        /**
         * Task identifier
         */
        id: number;
    };
};

export type TasksControllerUpdateResponse = (Task);

export type TasksControllerUpdateError = (unknown);

export type TasksControllerRemoveData = {
    path: {
        /**
         * Task identifier
         */
        id: number;
    };
};

export type TasksControllerRemoveResponse = (void);

export type TasksControllerRemoveError = (unknown);