export default interface GenericEntity {
    id: number;
    created_at: number;
}

export const createEntity = <T extends GenericEntity>(entity: Partial<T>): T => {
    const createdAt = Date.now();
    return {
        id: null,
        ...entity,
        created_at: createdAt,
    } as T;
}