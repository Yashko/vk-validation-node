# vk-validation-node
Скрипт для решения ошибки #17 при обращении к API VK.
https://new.vk.com/dev/need_validation

Ошибка может выглядеть следующим образом:
```
{ error:
   { error_code: 17,
     error_msg: 'Validation required: please open redirect_uri in browser 123456',
     request_params: [ [Object], [Object], [Object], [Object], [Object] ],
     redirect_uri: 'https://m.vk.com/login?act=security_check&api_hash=qwerty123456' } }
```
     
# Инструкция
1. Запускаем скрипт validation, первым параметром передаем в него api_hash из redirect_uri (в примере вверху это qwerty12356, в таком случае запускаем так `node validation qwerty12456`)
2. Вводим недостающие цифры номера телефона. Код страны и последние две цифры vk отображает. 
(для российский номеров - 8 цифр, для украинских - 7)
3. После завершения скрипта пробуем сделать запрос к api.
    
    


