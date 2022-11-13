

function Greetings( children){

    return (
        <div className="Greentins">
            <p>
        {children.lang === 'de' ? 'Halu' : ''}
        {children.lang === 'en' ? 'Hello' : ''}
        {children.lang === 'es' ? 'Ola' : ''}
        {children.lang === 'fr' ? 'Salut' : ''}
      </p>

      {children.children}
            
        </div>
    )

}

export default Greetings;