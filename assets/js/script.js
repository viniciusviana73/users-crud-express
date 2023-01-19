/*   Open and Hide editUser section   */

const sectionUsersM = document.querySelector('#userManegement')

function hideEdit() {
    sectionUsersM.classList.remove('open')
}

function showEdit() {
    sectionUsersM.classList.add('open')
}


/*   Open Update User Section   */

const inputId = document.querySelector('input#userid'),
      inputName = document.querySelector('input#name'),
      inputEmail = document.querySelector('input#email'),
      inputGender = document.querySelectorAll('input[type=radio]'),
      inputBirthdate = document.querySelector('input#birthdate')

async function loadUserdata(id) {
    try {
        const url = document.URL + `api/users/?id=${id}`
        
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        
        const result = await response.json()

        /*   Setting values on form   */ 

        // Id (hidden input)
        inputId.value = result._id

        // Name
        inputName.value = result.name

        // Email
        inputEmail.value = result.email

        // Gender
        for (let pos in inputGender) {
            if (inputGender[pos].value == result.gender) {
                inputGender[pos].checked = true
            }
        }

        // Birthdate
        inputBirthdate.value = result.birthdate

        // Open Edit Session
        showEdit()
    } catch (error) {
        console.log(error)
    }
}


/*   Update User   */

const inputSubmit = document.querySelector('input#submitInput')

async function update_user() {
    try {
        // URL and Body for the request
        const url = document.URL + `api/users/${inputId.value}`
        const jsonData = JSON.stringify({
            name: String(inputName.value),
            email: String(inputEmail.value),
            gender: $('input[name=gender]:checked').val(),
            birthdate: inputBirthdate.value
        })
        
        // PUT request to edit user
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: jsonData
        })

        // reload the page
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

inputSubmit.onclick = (event) => {
    event.preventDefault()
    update_user()
}

/*   Delete User   */

async function delete_user(id) {
    if (confirm("Confirm delete?")) {
        try {
            // URL for the request
            const url = document.URL + `api/users/${id}`
    
            // DELETE request
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
    
            // reload the page
            location.reload()
        } catch (error) {
            console.log(error)
        }
    }     
}