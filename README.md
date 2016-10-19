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
1. Запускаем скрипт validation, первым параметром передаем в него api_hash из redirect_uri (в примере выше это qwerty12356, в таком случае запускаем так `node validation qwerty12456`). Опционально - вторым параметром можно передать недостающие цифры телефона (`node validation qwerty12456 13371337`) Если указали телефон сразу, то второй пункт инструкции пропускаем.
2. Вводим недостающие цифры номера телефона. Код страны и последние две цифры номера VK отображает.  
(то есть, надо ввести: для российский номеров - 8 цифр, для украинских - 7 цифр)
3. После завершения скрипта пробуем сделать запрос к api.

**api_hash в redirect_uri одноразовый, поэтому если уже открыли эту ссылку где либо, то для запуска скрипта надо получить новый redirect_uri**

Если понадобится помощь, пишите в вк http://vk.com/qswag
