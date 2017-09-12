const Ansible = require('node-ansible')

for (let i = 0; i < 10; i += 1) {
  let command = new Ansible.Playbook().playbook('test')
  command.inventory('hosts')
  command.exec()
    .then(successResult => {
      console.log(successResult)
    })
    .catch(err => {
      console.log(err)
    })
}
