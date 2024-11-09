export default function removeTask(gonnaBeDeltask: string, tasks: string[]): string[] {
    return tasks.filter(task => task !== gonnaBeDeltask)
}