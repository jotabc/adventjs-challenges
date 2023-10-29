export const getFilesToBackup = (lastBackup, changes) => {
  const filesToBackupIds = []

  for (let i = 0; i < changes.length; i++) {
    const [fileId, timestamp] = changes[i]

    if (timestamp > lastBackup) {
      filesToBackupIds.push(fileId)
    }
  }

  const dataArr = new Set(filesToBackupIds)
  const result = [...dataArr]

  return result.sort((a, b) => a - b)
}
