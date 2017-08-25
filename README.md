# About

Spikit is an MVC built around [express](https://expressjs.com) using [pug](https://pugjs.org) as a render engine.

Spikit also has built-in middleware that will compile client `Sass` and `TypeScript` within the `resources` folder at run time if any of the files have changed.

# Installation

To install the Spikit skeleton, run the following commands:

> **Note:** Replace "MyProject" with your project name

```sh
> git clone git@github.com:Spikit/spikit.git MyProject
> cd MyProject
> npm install
> # Optional Command (the documentation will be documented via TypeScript):
> npm install typescript -g
```

# Usage

You can start using the engine without having to write the express engine. This has all been done for you, so the first thing to do is create a route.

To create a route open the `web.ts` file in `src/routes`. You will see that a route has already been created. If you build the project:

```
tsc -w -p .
```

Once your project has been build it will create a similar directory structure under the root folder `app` where all your js files will end up (Which is where you can work if you don't use `TypeScript`)

## Routes

Now in the `web.ts` file we can add additional routes. Routes using the `route` module, wich you can see has been imported at the top.

Lets add a new route to an `about` page, we just need to add it to our routes file like so:

```ts
route.get('about', 'MainController@about')
```

Since we passed a string the framework will look for the controller (the part before the `@` symbol) in `src/http/controllers`. We could also put the controller in a sub-directory by doing `public/MainController@about` which would then look for the controller in `src/http/controllers/public`. The part after the `@` is the method within that controller.

> **Note:** The class name and file name must be the same with the same case as define in web.ts

We can also string different methods to the route, such as `middleware()` and/or `name()`.

```ts
route.post('email', 'Feedback@send').middleware('ajax').name('sendEmail')
```

In the above we set a post request, and we will only accept ajax requests. We then name the route `sendEmail`.

## Controllers

```ts
import { view } from 'spikit'

export class MainController {
  public about() {
    return view('about', { name: 'Billy Bob Joe' })
  }
}
```

The above controller is fairly simple, make sure that your controller methods are simple and reusable wherever possible.

## Views

Next we will create our view. The above code says that the name of the view is called `about.pug` which we need to create in `resources/views`. Pug directories are seporated with a "`/`" or a "`.`". So for example if we wanted to create the file in a directory called `public/about.pug` we would call the view like so: `return view('public.about')`

```pug
doctype html
html
  head
    title About Me
  body
    h1= name
```

Now compile and re-start the server; then go to your browser and hit the url: [http://localhost:5050/about](http://localhost:5050/about)

Look at that! You made a page without having to write the express engine!

## Pug helpers

We have added a few helpers to pug, which you can use. This makes it easier to do things in the engine without having to pass the data through the view.

### route()

The route function allows you to get a full route path which we specify in the routes by using the method `name('sendEmail')`.

```pug
form(method='post' action=`${route('sendEmail')}`)
```

If the route has parameters such as `/profile/:username` Then you will have to pass another parameter to the route method like this:

```pug
each val in ['Billy', 'Bob', 'Joe']
  p: a(href=`${route('profile', val)}`)= val
```

The above will then create the following urls:

* `http://localhost:5050/profile/Billy`
* `http://localhost:5050/profile/Bob`
* `http://localhost:5050/profile/Joe`

### url()

The url function will take a path and resolve to the url of the app.

```pug
p= url('bob/joe')
```

Asumming the current location is `http://localhost:5050/billy` here are how the following urls will resolve:

* `url('bob/joe') -> http://localhost:5050/billy/bob/joe`
* `url('/bob/joe') -> http://localhost:5050/bob/joe`
* `url('/bob/../joe') -> http://localhost:5050/joe`
* `url('../bob/joe') -> http://localhost:5050/bob/joe`
* `url('../bob/../joe') -> http://localhost:5050/joe`

## Localization

Spikit comes with builtin easy to use localization middleware. To use the localization, you will need to create folders in your `resources/lang` folder. For example:

* `resources/lang/en`
* `resources/lang/ru`
* `resources/lang/ja`

Then within that folder you can create your files/subfolders. So for example we can create a file named `about.json` for our about page.

`resources/lang/en/about.json`
```json
{
  "about": "I am a Node.js web developer who likes kittens."
}
```

`resources/lang/ru/about.json`
```json
{
  "about": "Я веб-разработчик Node.js, который любит котят."
}
```

`resources/lang/ja/about.json`
```json
{
  "about": "私は子猫が好きなNode.js Web開発者です。"
}
```

Now in our about page, we can add the translation using the `trans(path: string, fall_back?: string)` helper function. As you can see the first parameter is the path to the key, and the second parameter is if the file/key was not found.

```pug
doctype html
html
  head
    title About Me
  body
    h1= name
    p= trans('about.about', 'I am awesome!')
```

With the trans function the part before the last do is the path to the file within the `resources/lang/xx`, and the part after the last dot is the key of the item we would like to get.

### Changing the language

Changing the language is easy, to do so just navigate your browser to `/locale/xx` where `xx` is the language such as `ru`.

> **Note:** If the middleware for localization is disabled/removed, so is the route and express will say that the route was not found if it is accessed.